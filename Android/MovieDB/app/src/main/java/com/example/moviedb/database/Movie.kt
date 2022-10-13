package com.example.moviedb.database

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity (tableName = "MovieList")
data class Movie(
    @PrimaryKey (autoGenerate = true) val id: Int,
    @ColumnInfo(name = "title") val title: String?,
    @ColumnInfo(name = "release_year") val release_year: String?,
    @ColumnInfo(name = "director") val director: String?
)
