package com.example.moviedb.adapter

import android.content.Context
import android.content.Intent
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.moviedb.MovieDetailsActivity
import com.example.moviedb.R
import com.example.moviedb.database.MovieEntity


class MoviesAdapter(private val movies: List<MovieEntity>?, private val context: Context) :
    RecyclerView.Adapter<MoviesAdapter.ViewHolder>() {

    inner class ViewHolder(item: View) : RecyclerView.ViewHolder(item) {
        val movieTitle: TextView = item.findViewById(R.id.movieTitle)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.movie_view_holder, parent, false)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.movieTitle.text = movies?.get(position)?.movieTitle

        holder.movieTitle.setOnClickListener {
            val intent = Intent(context, MovieDetailsActivity::class.java).apply {
                putExtra("movies", movies?.get(position))
            }
            context.startActivity(intent)
        }

    }

    override fun getItemCount(): Int {
        return movies?.size ?: 0
    }
}
