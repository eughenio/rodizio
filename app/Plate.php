<?php namespace app;

use Illuminate\Database\Eloquent\Model;

class Plate extends Model {

    protected $table = 'plates';

    protected $fillable = ['end', 'fk_user', 'receive_email'];

}
