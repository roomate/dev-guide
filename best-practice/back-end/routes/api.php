<?php

use Illuminate\Http\Request;

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

Route::group(['namespace'=>'Auth'],function () {
    Route::post('login', 'LoginController@login');
    Route::post('register', 'RegisterController@register');
    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('userInfo', 'UserController@getUserInfo');
        Route::get('logout', 'LoginController@logout');
        Route::get('menu', 'UserController@getUserMenu');
    });
});


Route::group(['namespace'=>'Admin','middleware' => 'auth:api'],function () {
    Route::get('menu/list/{id}', 'MenuController@getData');


    Route::get('user/list', 'UserController@getList');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
