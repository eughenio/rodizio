<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Plates extends Model
{
    protected $table = 'plates';

    protected $fillable = ['id', 'end', 'fk_user', 'receive_email'];
}
