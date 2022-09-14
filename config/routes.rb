Rails.application.routes.draw do
  root 'welcome#index'

  devise_for :clients, path: :clients, controllers: {
    sessions: 'clients/sessions', password: 'clients/passwords'
  }

  devise_for :staffs, path: :staffs, controllers: {
    sessions: 'staffs/sessions', password: 'staffs/passwords'
  }

  get :list, to: "items#index"

  namespace :staffs do
    resources :clients, only: %i[index create], defaults: { format: 'json' }
    get '/clients/new', to: 'clients#new', as: :new_clients
    get '/users/current_user', to: 'users#current_user', as: :current_staff_user, defaults: { format: 'json' }
  end
end
