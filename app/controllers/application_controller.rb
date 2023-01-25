class ApplicationController < ActionController::Base
  # layout 'clients/application'

  def message
    render json: { message: "Message from ApplicationController" }
  end

  private

  def response_data(object)
    {
      success: object.errors.messages.blank?,
      object: object,
      errors: object.errors.full_messages.join(', ')
    }
  end
end
