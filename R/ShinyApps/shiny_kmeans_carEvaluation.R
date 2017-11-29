library(shiny)

data <- read.csv("https://archive.ics.uci.edu/ml/machine-learning-databases/car/car.data")
newData <- data
names(newData) <- c("buying", "maint", "doors", "persons", "lug_boot", "safety", "class_val")

# this function is used to convert string to int
# only work with columns that have one string value
# through the columns
ConvertStrToNum <- function(col, oldVal, newVal){
  col <- as.character(col)
  col[col == oldVal] <- newVal
  col <- as.numeric(col)
  return(col)
}

# this function is used to convert string to ini,
# it works with columns that have multiple values
ConertValues <- function(col, oldVal1, newVal1, oldVal2, newVal2, oldVal3, newVal3, oldVal4, newVal4){
  col <- as.character(col)
  col[col == oldVal1] <- newVal1
  col[col == oldVal2] <- newVal2
  col[col == oldVal3] <- newVal3
  col[col == oldVal4] <- newVal4
  col <- as.numeric(col)
  return(col)
} 

# set class column to null because kmeans won't work 
# if this column not null
newData$class_val<- NULL

# mapping each value to number
newData$buying <- ConertValues(newData$buying, "vhigh", "4",  "high", "3", "med", "2", "low", "1")
newData$maint <- ConertValues(newData$maint, "vhigh", "4",  "high", "3", "med", "2", "low", "1")
newData$lug_boot <- ConertValues(newData$lug_boot, "big", "3", "med", "2", "small", "1", "!", "!")
newData$safety <- ConertValues(newData$safety, "high", "3", "med", "2", "low", "1", "!", "!")
newData$doors <- ConvertStrToNum(newData$doors, "5more", "5")
newData$persons <- ConvertStrToNum(newData$persons, "more", "5")




ui <- pageWithSidebar(
  headerPanel('Car k-means clustering'),
  sidebarPanel(
    selectInput('xcol', 'X Variable', names(newData)),
    selectInput('ycol', 'Y Variable', names(newData),
                selected=names(newData)[[2]]),
    numericInput('clusters', 'Cluster count', 4,
                 min = 1, max = 15)
  ),
  mainPanel(
    plotOutput('plot1')
  )
)

server <- function(input, output, session) {
  
  # Combine the selected variables into a new data frame
  selectedData <- reactive({
    newData[, c(input$xcol, input$ycol)]
  })
  
  clusters <- reactive({
    kmeans(selectedData(), input$clusters)
  })
  
  output$plot1 <- renderPlot({
    palette(c("#E41A1C", "#377EB8", "#4DAF4A", "#984EA3",
              "#FF7F00", "#FFFF33", "#A65628", "#F781BF", "#999999"))
    
    par(mar = c(5.1, 4.1, 0, 1))
    plot(selectedData(),
         col = clusters()$cluster,
         pch = 20, cex = 3)
    points(clusters()$centers, pch = 4, cex = 4, lwd = 4)
  })
}

shinyApp(ui = ui, server = server)