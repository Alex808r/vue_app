Rails.application.routes.draw do
  root 'welcome#index'

  devise_for :clients, path: :clients, controllers: {
    sessions: 'clients/sessions', passwords: 'clients/passwords'
  }

end
