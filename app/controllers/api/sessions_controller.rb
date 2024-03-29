class Api::SessionsController < ApplicationController
  
  def create
    # debugger
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login!(@user)
      render "/api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    # debugger    
    @user = current_user
    if @user
      logout!
      render "/api/users/show"
    else
      render json: ["Please sign in"], status: 404
    end
  end

end
