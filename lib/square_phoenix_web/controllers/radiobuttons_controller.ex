defmodule SquarePhoenixWeb.RadiobuttonsController do
  use SquarePhoenixWeb, :controller

  def index(conn, _params) do
    render conn, "radiobuttons.html"
  end
end
