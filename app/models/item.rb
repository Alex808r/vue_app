class Item < ApplicationRecord
  after_save :broadcast

  private

  def broadcast
    ActionCable.server.broadcast('items', { item: self })
  end
end
