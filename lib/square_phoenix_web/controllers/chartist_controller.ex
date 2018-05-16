defmodule SquarePhoenixWeb.ChartistController do
  use SquarePhoenixWeb, :controller

  def index(conn, _params) do
    render conn, "chartist.html"
  end
end
