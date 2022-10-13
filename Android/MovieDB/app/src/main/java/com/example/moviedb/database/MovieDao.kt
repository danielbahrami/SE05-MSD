package com.example.moviedb.database

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.Query

@Dao
interface MovieDao {
    @Query("SELECT * FROM MovieList")
    fun getAll(): List<Movie>

    @Query("SELECT * FROM MovieList WHERE :MovieID = id")
    fun loadByID(MovieID: Int): Movie

    @Insert
    fun insert(Movie: Movie)

    @Delete
    fun delete(Movie: Movie)
}
