class PokemonsController < ApplicationController

  def index
    @pokemons = Pokemon.all
  end

  def create
    pokemon = Pokemon.new
    pokemon.species = params[:species]
    pokemon.nickname = params[:nickname]
    pokemon.level = params[:level]
    pokemon.save
    redirect_to '/pokemons'
  end

  def new
  end

end
