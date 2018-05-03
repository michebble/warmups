Rails.application.routes.draw do
  resources :pokemons
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  get '/pokemons', to: 'pokemons#index'
  get '/pokemons/new', to: 'pokemons#new'
  post '/pokemons', to: 'pokemon#create'

end
