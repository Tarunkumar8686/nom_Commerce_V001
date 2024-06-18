import 'cypress-file-upload'

describe('File Upload',()=>{

    it.skip('single File Upload',()=>{

      cy.visit("https://the-internet.herokuapp.com/upload");
      
      cy.get('#file-upload').attachFile('intro.jpg');

      cy.get('#file-submit').click();

     cy.wait(4000);

    })

    it.skip('File-upload rename',()=>{
      
      cy.visit("https://the-internet.herokuapp.com/upload");
      
      cy.get('#file-upload').attachFile({filePath:'intro.jpg',fileName:'myfile.jpg'});

      cy.get('#file-submit').click();
      
     cy.wait(4000);

     cy.get("div[class='large-12 columns'] h3").should('have.text','File Uploaded!')
    })

   it.skip('fileUpload -Drag and drop',()=>{

    cy.visit("https://the-internet.herokuapp.com/upload");

    cy.get('#drag-drop-upload').attachFile('intro.jpg',{subjectType:'drag-n-drop'});

    cy.wait(3000);

    cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('intro.jpg');

   })

   it.skip('Multiple Drag and drop',()=>{

    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
    cy.get('#filesToUpload').attachFile(["intro.jpg","sample.html.txt"])


    cy.get(':nth-child(6) > strong').contains('Files You Selected:')
   })

    it.only('file upload',()=>{

      cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")

      cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('intro.jpg');

      cy.get('.smart-file',{includeShadowDom:true}).contains('intro.jpg')
      

    })


})