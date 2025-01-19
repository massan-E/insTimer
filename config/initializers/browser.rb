if defined?(Browser)
  Browser.modern_rules.clear
  Browser::Base.include(Module.new {
    def modern?
      true
    end
  })
end