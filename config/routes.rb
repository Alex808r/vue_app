Rails.application.routes.draw do
  root 'welcome#index'

  devise_for :clients, path: :clients, controllers: {
    sessions: 'clients/sessions', password: 'clients/passwords'
  }

  devise_for :staffs, path: :staffs, controllers: {
    sessions: 'staffs/sessions', password: 'staffs/passwords'
  }

end
