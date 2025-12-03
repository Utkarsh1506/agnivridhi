# PowerShell script to add consultation modal to all pages

$files = @(
    "404.html",
    "blog.html",
    "contact.html",
    "FAQ.html",
    "feature.html",
    "service.html",
    "team.html",
    "success-stories.html",
    "500.html",
    "cgtmse-hamarapetrol.html",
    "funding-priyakirana.html"
)

$modalHTML = @'

    <!-- Consultation Form Modal -->
    <div class="modal fade" id="consultationModal" tabindex="-1" aria-labelledby="consultationModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content border-0 shadow-lg">
                <div class="modal-header bg-primary text-white border-0">
                    <h5 class="modal-title" id="consultationModalLabel">
                        <i class="fas fa-handshake me-2"></i>Book Your Free Consultation
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                    <p class="text-muted mb-4">Fill out the form below and our experts will get back to you within 24 hours with a customized funding solution.</p>
                    <form id="consultationForm">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label for="fullName" class="form-label">Full Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="fullName" name="fullName" required placeholder="Enter your full name">
                            </div>
                            <div class="col-md-6">
                                <label for="mobile" class="form-label">Mobile Number <span class="text-danger">*</span></label>
                                <input type="tel" class="form-control" id="mobile" name="mobile" required placeholder="10-digit mobile number" pattern="[0-9]{10}">
                            </div>
                            <div class="col-md-6">
                                <label for="email" class="form-label">Email Address <span class="text-danger">*</span></label>
                                <input type="email" class="form-control" id="email" name="email" required placeholder="your.email@example.com">
                            </div>
                            <div class="col-md-6">
                                <label for="businessName" class="form-label">Business Name</label>
                                <input type="text" class="form-control" id="businessName" name="businessName" placeholder="Your business name">
                            </div>
                            <div class="col-md-6">
                                <label for="businessType" class="form-label">Business Type <span class="text-danger">*</span></label>
                                <select class="form-select" id="businessType" name="businessType" required>
                                    <option value="">Select business type</option>
                                    <option value="Manufacturing">Manufacturing</option>
                                    <option value="Trading">Trading</option>
                                    <option value="Service">Service</option>
                                    <option value="Retail">Retail</option>
                                    <option value="Food & Beverage">Food & Beverage</option>
                                    <option value="Technology">Technology</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="fundingRequired" class="form-label">Funding Required <span class="text-danger">*</span></label>
                                <select class="form-select" id="fundingRequired" name="fundingRequired" required>
                                    <option value="">Select range</option>
                                    <option value="Below 10 Lakhs">Below ₹10 Lakhs</option>
                                    <option value="10-25 Lakhs">₹10-25 Lakhs</option>
                                    <option value="25-50 Lakhs">₹25-50 Lakhs</option>
                                    <option value="50 Lakhs - 1 Crore">₹50 Lakhs - ₹1 Crore</option>
                                    <option value="Above 1 Crore">Above ₹1 Crore</option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <label for="serviceInterested" class="form-label">Service Interested In <span class="text-danger">*</span></label>
                                <select class="form-select" id="serviceInterested" name="serviceInterested" required>
                                    <option value="">Select service</option>
                                    <option value="CGTMSE Loan">CGTMSE Loan (Collateral-Free)</option>
                                    <option value="MUDRA Loan">MUDRA Loan</option>
                                    <option value="MSME Loan">MSME Loan</option>
                                    <option value="PMEGP Scheme">PMEGP Scheme</option>
                                    <option value="Startup Funding">Startup Funding</option>
                                    <option value="Business Expansion">Business Expansion</option>
                                    <option value="ISO Certification">ISO Certification</option>
                                    <option value="MSME Registration">MSME Registration</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <label for="message" class="form-label">Additional Details</label>
                                <textarea class="form-control" id="message" name="message" rows="3" placeholder="Tell us about your business needs, funding purpose, timeline, etc."></textarea>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="agreeTerms" required>
                                    <label class="form-check-label small" for="agreeTerms">
                                        I agree to receive communications from Agnivridhi India and understand my information will be used per the <a href="#" class="text-primary">Privacy Policy</a>.
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="d-grid gap-2 mt-4">
                            <button type="submit" class="btn btn-primary btn-lg">
                                <i class="fas fa-paper-plane me-2"></i>Submit Consultation Request
                            </button>
                            <p class="text-center text-muted small mb-0 mt-2">
                                <i class="fas fa-lock me-1"></i>Your information is secure and confidential
                            </p>
                        </div>
                    </form>
                    <div id="formSuccess" class="alert alert-success mt-3 d-none">
                        <i class="fas fa-check-circle me-2"></i>Thank you! We've received your consultation request. Our team will contact you within 24 hours.
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Consultation Form Modal End -->

'@

$searchPattern = '<!-- JavaScript Libraries -->'

foreach ($file in $files) {
    $filePath = "c:\Users\Admin\Downloads\agni\$file"
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        
        # Check if modal already exists
        if ($content -notmatch 'id="consultationModal"') {
            $content = $content -replace $searchPattern, ($modalHTML + "`r`n    " + $searchPattern)
            Set-Content -Path $filePath -Value $content -NoNewline
            Write-Host "Added modal to: $file" -ForegroundColor Green
        } else {
            Write-Host "Modal already exists in: $file" -ForegroundColor Yellow
        }
    } else {
        Write-Host "File not found: $file" -ForegroundColor Red
    }
}

Write-Host "`nConsultation modal added to all pages!" -ForegroundColor Cyan
