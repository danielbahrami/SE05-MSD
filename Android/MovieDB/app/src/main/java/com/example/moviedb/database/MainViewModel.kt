package com.example.moviedb.database

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.launch

class MainViewModel(private val movieDatabase: MovieDatabase) : ViewModel() {

    val movies = movieDatabase.dao.getAllMovies()

    fun insertMovie(movieEntity: MovieEntity) {
        viewModelScope.launch {
            movieDatabase.dao.insertMovie(movieEntity)
        }
    }
}
