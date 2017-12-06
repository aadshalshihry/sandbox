library(shiny)

library('ggplot2')
library('caret')
library('randomForest')

bank_data <-  read.table("Datasets/bank_marketing/bank-additional/bank-additional-full.csv",sep = ";",stringsAsFactors = TRUE, header = T)


# bank_data <-  read.table("Datasets/bank_marketing/bank_additional/bank-additional-full.csv",sep = ";",stringsAsFactors = TRUE, header = T)
#names(car_data) <-  c("buying","maint","doors","persons","lug_boot","safety","class")
str(bank_data)


set.seed(400)







ui <- pageWithSidebar(
  headerPanel('Car k-means clustering'),
  sidebarPanel(
    selectInput('xcol', 'X Variable', names(bank_data)),
    selectInput('ycol', 'Y Variable', names(bank_data))

    # numericInput('clusters', 'Cluster count', 4,
      #            min = 1, max = 15)
  ),
  mainPanel(
    plotOutput('plot1')
  )
)

server <- function(input, output, session) {
  
  # Combine the selected variables into a new data frame
  selectedData <- reactive({
    bank_data[, c(input$xcol, input$ycol)]
  })
  
  v <- reactive({
    
    sample.ind <- sample(2, 
                         nrow(bank_data),
                         replace = T,
                         prob = c(0.6,0.4))
    train_bank <- bank_data[sample.ind==1,]
    test_bank <- bank_data[sample.ind==2,]
    
    y_train <- train_bank[,'y']
    x_train <- model.matrix(y ~ . - 1,data=train_bank)
    
    y_test <- test_bank[,'y']
    x_test <- model.matrix(y ~ . - 1,data=test_bank)
    
    TrainingParameters <- trainControl(method = "oob", savePredictions = T)
    
    RFModel <- train(x_train, y_train,
                     method = "rf",
                     trControl= TrainingParameters,
                     preProcess=c("scale","center"),
                     na.action = na.omit,
                     importance=T,
                     ntree=500
    )
  })
  
  output$plot1 <- renderPlot({
    
    ggplot(v()$RFModel)
    plot(unclass(v()$RFModel)$finalModel, main='Classifier Performance')
    #varImpPlot(selectedData(), main="Variable Importance Plot")
    #RFPredictions <- predict(selectedData(),x_test)
    #cmRF <-confusionMatrix(RFPredictions, y_test)
    #print(cmRF)

  })
}

shinyApp(ui = ui, server = server)