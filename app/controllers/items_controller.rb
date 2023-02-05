class ItemsController < ApplicationController
  def index
    @items = Item.all
    # @items = [
    #   { id: 1, name: 'First', type: 'alert' },
    #   { id: 2, name: 'Second', type: 'info', task: { text: 'say hi'} },
    #   { id: 3, name: 'Third', type: 'error', user: { email: "user@mail.com"} }
    # ]
  end

  def show
    @item = Item.find(params[:id])
  end

  def update
    @item = Item.find(params[:id])
    @item.update(item_params)
  end

  private
  
  def item_params
    params.require(:item).permit(:name, :text)
  end
end
