<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Declaration extends Model
{
    use SoftDeletes;

    protected  $appends = [ 'date_description' ];
    protected $fillable = [
        'user_id',
        'declaration',
    ];

    public function user()
    {
       return $this->belongsTo(User::class);
    }

    public function getDateDescriptionAttribute(){

        $date = Carbon::parse($this->created_at);
        $diff = $date->diffInDays(Carbon::now());
        
        if($diff == 0){
            $string_date = 'Postado hojé as '. date('H:i:s', strtotime($this->created_at));;
        }else if($diff <= 10){
            $string_date = 'Há '. $diff .' dias atrás';
        }else{
            $string_date = date('d/m/Y H:i:s', strtotime($this->created_at));
        }

        return $string_date;
    }

}
