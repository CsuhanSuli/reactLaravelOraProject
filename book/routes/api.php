<?php

use App\Http\Controllers\BookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get("/",[BookController::class,"index"]);
Route::get("/show/{id}",[BookController::class,"show"]);
Route::get("/show1/{id}",[BookController::class,"show1"]);
Route::get("/show2/{id}",[BookController::class,"show2"]);
Route::post("/post",[BookController::class,'store']);