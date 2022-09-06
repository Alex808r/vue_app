class ItemsController < ApplicationController
  def index
    @items = [
      { id: 1, name: 'First' },
      { id: 2, name: 'Second' },
      { id: 3, name: 'Third' }
    ]
  end
end
