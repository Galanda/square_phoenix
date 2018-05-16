defmodule SquarePhoenixWeb.FormsController do
  use SquarePhoenixWeb, :controller

  def index(conn, _params) do
    render conn, "forms.html"
  end
end
