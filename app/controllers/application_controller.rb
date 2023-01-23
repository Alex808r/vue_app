class ApplicationController < ActionController::Base
  layout 'clients/application'

  private

  def response_data(object)
    {
      success: object.errors.messages.blank?,
      object: object,
      errors: object.errors.full_messages.join(', ')
    }
  end
end
