<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plates', function(Blueprint $table)
        {
            $table->increments('id')->index();
            $table->integer('end');
            $table->integer('fk_user')->unsigned();
            $table->boolean('receive_email');
            $table->timestamps();
            $table->foreign('fk_user')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('plates');
    }
}