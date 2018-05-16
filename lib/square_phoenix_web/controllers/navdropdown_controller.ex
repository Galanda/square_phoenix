defmodule SquarePhoenixWeb.NavDropDownController do
  use SquarePhoenixWeb, :controller

  def index(conn, _params) do
    render conn, "navdropdown.html"
  end
end
