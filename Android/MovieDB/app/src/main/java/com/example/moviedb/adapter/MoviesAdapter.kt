package com.example.moviedb.adapter

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.moviedb.R
import com.example.moviedb.database.MovieEntity


class MoviesAdapter(private val data: List<MovieEntity>?, private val context: Context) :
    RecyclerView.Adapter<MoviesAdapter.ViewHolder>() {

    inner class ViewHolder(item: View) : RecyclerView.ViewHolder(item) {
        val movieTitle: TextView = item.findViewById(R.id.movieTitle)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.movie_view_holder, parent, false)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.movieTitle.text = data?.get(position)?.movieTitle

        /*
        holder.movieTitle.setOnClickListener {
            val intent = Intent(context, MovieDetailsActivity::class.java).apply {
                putExtra("movie", movies[position])
            }
        }
        */

    }

    override fun getItemCount(): Int {
        return data?.size ?: 0
    }
}
