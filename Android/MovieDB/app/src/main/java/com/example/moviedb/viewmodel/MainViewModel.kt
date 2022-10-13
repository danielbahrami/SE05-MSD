package com.example.moviedb.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.moviedb.database.MovieDatabase
import com.example.moviedb.database.MovieEntity
import kotlinx.coroutines.launch

class MainViewModel(private val movieDatabase: MovieDatabase) : ViewModel() {

    val movies = movieDatabase.dao.getAllMovies()

    fun insertMovie(movieEntity: MovieEntity) {
        viewModelScope.launch {
            movieDatabase.dao.insertMovie(movieEntity)
        }
    }
}
