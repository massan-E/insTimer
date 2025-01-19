class ApplicationController < ActionController::Base
  # ブラウザバージョン検証を無効化
  skip_before_action :verify_browser_support, if: -> { defined?(Browser) }
end
