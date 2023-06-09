<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('website.index');
});

Route::get('/login', function () {
    return view('website.login');  
});

Route::get('/register', function () {
    return view('website.register');  
});

Route::get('/home', [HomeController::class, 'index']);
Route::get('/me', [ProfileController::class, 'index']);
