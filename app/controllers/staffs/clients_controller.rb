class Staffs::ClientsController < Staffs::ApplicationController
  include Pagy::Backend

  before_action :find_client, only: %i[update destroy]

    # before_action :authenticate_user!

  def index
    # @clients = Client.select(:id,:name, :phone, :email)
    # respond_to do |format|
    #   format.json { render json: @clients }
    # end

    # render json: Client.select(:id, :name, :email, :phone)

    @pagy, @records = pagy(Client.select(:id, :name, :email, :phone), items: params[:per_page] || 10)

    render json: { clients: @records, pagy: pagy_metadata(@pagy) }

  end

  def new
    @client = Client.new
  end

  def create
    # @client = Client.new(permitted_params)
    # @client.save
    #
    # respond_to do |format|
    #   format.json { render json: @client }
    # end
    @client = Client.new(permitted_params)
    @client.save

    render json: response_data(@client)
  end

  def show
    @client = Client.with_organization_ids.find(params[:id])

    render json: @client.as_json(only: %i[id name email phone organization_list_id])
  end

  def update
    @client.assign_attributes(permitted_params.except('password'))
    @client.organization_ids << params[:client][:organization_id]
    @client.save

    render json: response_data(@client)
  end

  def check_exists_client_by_field
    # respond_to do |format|
    #   format.json do
    #     render json: ExistsClientByField.call(field: params[:field], value: params[:value])
    #   end
    # end
    render json: ExistsClientByField.call(field: params[:field], value: params[:value])
  end

  def destroy
    @client.destroy

    render json: @client
  end

  private

  def permitted_params
    params.require(:client).permit(:name, :email, :password, :phone, :locale)
  end

  def find_client
    @client = Client.find(params[:id])
  end
end
