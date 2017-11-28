library(shiny)



# two type of page
#   1. pageWithSidebar
#   2. fluidPage
ui <- pageWithSidebar(
  headerPanel('Title')
  
)

server <- function(input, output, session) {
  
}

shinyApp(ui = ui, server = server)