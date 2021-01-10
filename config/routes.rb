Rails.application.routes.draw do
  root to: 'api/posts#index'
  namespace :api, {format: 'json'} do
    resources :posts, only: :index
  end
  # get 'posts', to: 'posts#index'
  # get 'posts/new', to: 'posts#new'
  post 'posts', to: 'posts#create'
  get 'posts/:id', to: 'posts#checked'
end