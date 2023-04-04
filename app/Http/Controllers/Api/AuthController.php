<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{

    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|between:2,100',
            'email' => 'required|email|unique:users|max:50',
            'password' => 'required|confirmed|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::create(array_merge(
            $validator->validated(),
            ['password' => bcrypt($request->password)]
        ));

        return response()->json([
            'message' => 'Successfully registered',
            'user' => $user
        ], 201);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        if (!$token = auth('api')->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        if(!auth('api')->user()->active){
            return response()->json(['error' => 'Usuário Não está ativo', 'active' => false], 401);
        }

        Log::info('Login In :' . json_encode($request->except('password')));
        return $this->createNewToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        Log::info('Get Profile User: ' . json_encode(auth('api')->user()));
        return response()->json(auth('api')->user());
    }

    /**
     * Update user active
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {   
        $user = User::find($request->id);
        $validator = Validator::make($request->all(), [
            'name' => 'required|between:2,100',
            'email' => 'required|email|unique:users,id,' . $request->id . '|max:50',
            'photo' => 'nullable|image|mimes:jpeg,png,gif'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $post = $request->except('_method', 'password', 'photo');

        if (!empty($request->photo)) {

            $fileName = time() . rand(time(), time()) . '.' . $request->photo->getClientOriginalExtension();
            $path = 'imagem/profile/' . $request->id . '/';

            if (!empty($user->photo) && file_exists($path . $user->photo)) {
                unlink($path . $user->photo);
            }

            $request->photo->move($path, $fileName);
            $post['photo'] = $fileName;
        }

        if ($request->password) {
            $post['password'] = Hash::make($request->password);
        }

        $user->name = $post['name'];
        $user->email = $post['email'];
        $user->description = $post['description'];
        if (!empty($post['password'])) {
            $user->password = $post['password'];
        }
        if (!empty($post['photo'])) {
            $user->photo = $post['photo'];
        }
        $user->save();

        $user = User::find($post['id']);
        Log::info('Update Profile User: ' . json_encode(auth('api')->user()));

        return response()->json([
            'message' => 'Successfully update',
            'user' => $user
        ], 200);
    }


    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth('api')->logout();
        Log::info('Logout User: ' . json_encode(auth('api')->user()));
        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        
        dd( JWTAuth::parseToken()->authenticate());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            // 'expires_in' => auth('api')->factory()->getTTL() * 60
            // 'expires_in' => null
        ]);
    }
}
