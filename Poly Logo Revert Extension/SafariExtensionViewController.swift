//
//  SafariExtensionViewController.swift
//  Poly Logo Revert Extension
//
//  Created by Stephen Parkinson on 10/22/19.
//  Copyright © 2019 Stephen Parkinson. All rights reserved.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        shared.preferredContentSize = NSSize(width:320, height:240)
        return shared
    }()

}
