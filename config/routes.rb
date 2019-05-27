Rails.application.routes.draw do
  root 'users#index'
  get '/home', to: 'users#index'
  get '/mention/:username', to: 'users#view_mention'
  get '/usertweets/:username', to: 'users#view_users_tweets'
end
