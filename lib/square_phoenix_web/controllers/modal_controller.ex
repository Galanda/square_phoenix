defmodule SquarePhoenixWeb.ModalController do
    use SquarePhoenixWeb, :controller
  
    def index(conn, _params) do
      render conn, "modal.html"
    end
  end
  