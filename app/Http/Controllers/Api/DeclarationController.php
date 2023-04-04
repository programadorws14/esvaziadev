<?php

namespace App\Http\Controllers\Api;

use App\Declaration;
use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DeclarationController extends Controller
{   


    public function getDeclaration()
    {   
        $declarations = Declaration::with('user')
            ->whereUserId(auth('api')->user()->id)
            ->paginate(5);
        Log::info('User Name: ' . auth('api')->user()->name . ' | Get Declarations');
        return !$declarations ? [] : $declarations;
    }

    public function store(Request $request)
    {
        try {
            if ($request->declaration && $request->declaration != '') {
                $post = $request->all();
                $post['user_id'] = auth('api')->user()->id;
                $declaration = Declaration::updateOrcreate(['id' => $request->id], $post);
                $declaration->load('user');
                return response()->json($declaration,  201);
                Log::info('User Name: ' . auth('api')->user()->name . ' |  ' . $request->id ? 'Update' : ' Create' . ' SEND REQUEST ' . json_encode($request->all()));
            }
        } catch (Exception $e) {
            Log::error($e);
            Log::error('User Name: ' . auth('api')->user()->name . ' | Error in create declaration');
            return response()->json(['error' => 'Calma, nosso sistema está fazendo um café, tente daqui alguns minutos'],  500);
        }
    }
}
