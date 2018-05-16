defmodule SquarePhoenixWeb.JustifyContentController do
  use SquarePhoenixWeb, :controller

  def index(conn, _params) do
    render conn, "justifycontent.html"
  end
end
