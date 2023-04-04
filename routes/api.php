<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DeclarationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);


Route::group([
    'middleware' => 'apiJWT',
], function () {

    /** AUTH */
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::get('me', [AuthController::class, 'me']);
    Route::put('update-profile', [AuthController::class, 'update']);

    /**DECLARATION */
    Route::get('declarations', [DeclarationController::class, 'getDeclaration']);
    Route::post('declaration', [DeclarationController::class, 'store']);

});
