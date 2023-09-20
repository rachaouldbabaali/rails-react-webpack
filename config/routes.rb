Rails.application.routes.draw do
  root 'root#index'
  namespace :api do
    get 'greetings/random'
  end
end
