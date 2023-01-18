class ItemsController < ApplicationController
  def index
    @items = [
      { id: 1, name: 'First', type: 'alert' },
      { id: 2, name: 'Second', type: 'info', task: { text: 'say hi'} },
      { id: 3, name: 'Third', type: 'error', user: { email: "user@mail.com"} }
    ]
  end
end
