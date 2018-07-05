defmodule SquarePhoenixWeb.CloseFunctionController do
  use SquarePhoenixWeb, :controller

  def index(conn, _params) do
    render conn, "closefunction.html"
  end
end
