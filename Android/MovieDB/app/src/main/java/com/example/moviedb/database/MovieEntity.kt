package com.example.moviedb.database

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "MoviesTable")
data class MovieEntity(
    val movieTitle: String,
    val movieReleaseYear: String,
    val movieDirector: String,
    @PrimaryKey(autoGenerate = true)
    var id: Long = 0,
)
