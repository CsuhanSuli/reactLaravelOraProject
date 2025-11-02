<?php

namespace App\Http\Controllers;

use App\Models\book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(book::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            "name"=>['required'],
            "authour"=>['required'],
            "releaseYear"=>['required','numeric','max:2025'],
            "wordCount"=>['required','numeric','min:0']
        ],
        [
            "releaseYear.max"=>'csak 2025 elöti lehet'
    ]);
        if($validator->fails())
        {
            return response()->json(['succes'=>false,'message'=>'A adatok nem megfelelöek','errors'=>$validator->errors()->toArray()],422);
        }
        $newRecord = new book();
        $newRecord->name = $request->name;
        $newRecord->authour = $request->authour;
        $newRecord->releaseYear = $request->releaseYear;
        $newRecord->wordCount = $request->wordCount;
        $newRecord->save();
        return response()->json(['succes'=>true,'message'=>'A adatok megfelelöek'],201);
    }


    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $book = book::find($id);
        if(empty($book))
            {
                return response()->json(["message"=>"nincs találat"],404);
            }
        else
            {
                return response()->json($book);
            }
    }
    public function show1(int $id)
    {
        $book = book::where("releaseYear",$id);
        if(empty($book))
            {
                return response()->json(["message"=>"nincs találat"],404);
            }
        else
            {
                return response()->json($book);
            }
    }
        public function show2(int $id)
    {
        $book = book::where("wordCount","<",$id)->get();
        if(empty($book))
            {
                return response()->json(["message"=>"nincs találat"],404);
            }
        else
            {
                return response()->json($book);
            }
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, book $book)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(book $book)
    {
        //
    }
}
