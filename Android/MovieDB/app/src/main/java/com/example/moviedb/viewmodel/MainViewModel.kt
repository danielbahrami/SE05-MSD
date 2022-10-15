package com.example.moviedb.viewmodel

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.LiveData
import androidx.lifecycle.viewModelScope
import com.example.moviedb.database.MovieDatabase
import com.example.moviedb.database.MovieEntity
import kotlinx.coroutines.launch

class MainViewModel(application: Application) : AndroidViewModel(application) {
    var movies: LiveData<List<MovieEntity>>

    init {
        movies = MovieDatabase.getInstance(application)?.dao?.getAllMovies()!!
    }

    fun insertMovie(movieEntity: MovieEntity) {
        viewModelScope.launch {
            MovieDatabase.getInstance(getApplication())?.dao?.insertMovie(movieEntity)
        }
    }
}
