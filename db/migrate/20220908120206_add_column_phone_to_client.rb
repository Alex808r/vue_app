class AddColumnPhoneToClient < ActiveRecord::Migration[6.1]
  def change
    add_column :clients, :phone, :string
    add_column :clients, :name, :string
  end
end
