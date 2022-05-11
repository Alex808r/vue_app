module DeviseMethods
  extend ActiveSupport::Concern

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  included do
    devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable
  end
end
