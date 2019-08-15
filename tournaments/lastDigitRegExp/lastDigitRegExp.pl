#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub lastDigitRegExp {
    my ($inputString) = @_;

    return join('', reverse(split('', $inputString))) =~ m/(\d)/;
}
